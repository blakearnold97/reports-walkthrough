"""Static server for the Reports Walkthrough. Railway sets PORT automatically."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8080"))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

server = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
print(f"Walkthrough live at http://localhost:{PORT}", flush=True)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
