"""Transcribe recipe videos in public/videos to content/transcripciones."""

from __future__ import annotations

import os
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = ROOT / "public" / "videos"
OUT = ROOT / "content" / "transcripciones"
EXTS = {".mp4", ".webm", ".mov", ".m4v"}


def slug_from_name(name: str) -> str:
    import re
    import unicodedata

    base = Path(name).stem.strip()
    normalized = unicodedata.normalize("NFD", base)
    stripped = "".join(ch for ch in normalized if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", stripped.lower()).strip("-")
    return slug


def ensure_ffmpeg() -> bool:
    if shutil.which("ffmpeg"):
        return True

    bundled = [
        ROOT / "node_modules" / "ffmpeg-static" / "ffmpeg.exe",
        ROOT / "node_modules" / "ffmpeg-static" / "ffmpeg",
    ]
    try:
        import imageio_ffmpeg

        bundled.append(Path(imageio_ffmpeg.get_ffmpeg_exe()))
    except Exception:
        pass

    for binary in bundled:
        if binary.exists():
            os.environ["PATH"] = str(binary.parent) + os.pathsep + os.environ.get("PATH", "")
            os.environ["FFMPEG_BINARY"] = str(binary)
            return True
    return False

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = ROOT / "public" / "videos"
OUT = ROOT / "content" / "transcripciones"
EXTS = {".mp4", ".webm", ".mov", ".m4v"}


def slug_from_name(name: str) -> str:
    import re
    import unicodedata

    base = Path(name).stem.strip()
    normalized = unicodedata.normalize("NFD", base)
    stripped = "".join(ch for ch in normalized if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", stripped.lower()).strip("-")
    return slug


def run() -> int:
    if not VIDEOS.exists():
        print("No hay vídeos en public/videos.")
        return 0

    videos = sorted(
        path for path in VIDEOS.iterdir() if path.is_file() and path.suffix.lower() in EXTS
    )
    if not videos:
        print("No hay vídeos en public/videos.")
        return 0

    OUT.mkdir(parents=True, exist_ok=True)
    pending = []
    for video in videos:
        dest = OUT / f"{slug_from_name(video.name)}.txt"
        if dest.exists() and "--force" not in sys.argv:
            print(f"Ya transcrito: {dest.name}")
            continue
        pending.append((video, dest))

    if not pending:
        print("No hay vídeos nuevos que transcribir.")
        return 0

    if not ensure_ffmpeg():
        print("No encuentro ffmpeg. Instala ffmpeg-static en el proyecto:")
        print("  npm install --save-dev ffmpeg-static")
        print("o: py -3 -m pip install imageio-ffmpeg")
        return 1

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print("Falta faster-whisper. Instálalo una vez:")
        print("  py -3 -m pip install faster-whisper")
        print("También hace falta ffmpeg en el PATH.")
        return 1

    print("Cargando modelo Whisper (base). La primera vez tarda un poco...")
    model = WhisperModel("base", device="cpu", compute_type="int8")

    for video, dest in pending:
        print(f"Transcribiendo {video.name}...")
        segments, info = model.transcribe(str(video), language="es")
        text = "\n".join(segment.text.strip() for segment in segments if segment.text.strip())
        header = (
            f"# {slug_from_name(video.name)}\n"
            f"# archivo: {video.name}\n"
            f"# idioma: {info.language}\n\n"
        )
        dest.write_text(header + text + "\n", encoding="utf-8")
        print(f"  -> {dest.relative_to(ROOT)}")

    print("Listo. Siguiente: pide en el chat que se escriban las recetas desde las transcripciones.")
    return 0


if __name__ == "__main__":
    raise SystemExit(run())
