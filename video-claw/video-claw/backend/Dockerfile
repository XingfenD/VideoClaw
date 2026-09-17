FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# ffmpeg for video post-production; the playwright deps cover chromium runtime libs.
RUN apt-get update \
    && apt-get install -y --no-install-recommends ffmpeg \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt \
    && playwright install --with-deps chromium

COPY . .

EXPOSE 8000

# Bind 0.0.0.0 explicitly: config.yaml defaults to 127.0.0.1, which is unreachable from outside the container.
CMD ["uvicorn", "api.app:app", "--host", "0.0.0.0", "--port", "8000"]
