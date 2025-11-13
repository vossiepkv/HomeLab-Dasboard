4 x Raspberry Pi's
Switch
7" touch LCD
NAS



1 - Olympus 

2 - Hermes

3 - Aries

4 - Cronus



Pi-1 — “Edge / Network” (keep it lean & rock-solid)

Pi-hole (primary) + Unbound

WireGuard (primary) or Tailscale

Caddy (or Nginx) reverse proxy for internal services

Uptime Kuma

Portainer (server) + agents on other Pis

Node Exporter
Why: DNS/VPN must stay responsive; keep media/AI off this box.

Pi-2 — “Home Automation”

Home Assistant (Container or HA OS on this Pi)

Mosquitto (MQTT)

Zigbee2MQTT (with USB Zigbee coordinator attached to this Pi)

Node-RED (optional)

ESPHOME (optional)

Node Exporter
Why: Keeps smart-home latency low; isolates from heavy CPU tasks.

Pi-3 — “Cameras / DVR”

Frigate NVR (strongly recommend Coral USB TPU if you can)

go2rtc (RTSP proxy) if needed

NAS mount (write recordings to Pi-4 or external SSD here)

Node Exporter
Notes: Without Coral, cap at low-res/low-FPS and limited cameras.

Pi-4 — “Media + Storage + Observability”

Jellyfin (direct-play; avoid transcoding on Pi)

Samba/NFS (your NAS share) or MinIO if you want S3-style

Prometheus + Grafana (central metrics)

Loki (optional) + Promtail agents on all Pis

NUT server if your UPS USB is here

Pi-hole (secondary) for DNS redundancy

Node Exporter
Why: IO-heavy tasks + dashboards live together; gives you capacity headroom.








Palette:  

fonts:

Titles - https://fonts.google.com/specimen/Yanone+Kaffeesatz
subtitles - https://fonts.google.com/specimen/Rubik
text - https://fonts.google.com/specimen/Pridi

Pages:

Main Landing (Open):
Olympus Title
4x Tile for each PI w/ names
each tile will display service icons and status color

once tile clicked will display:
device name
resource stat's 
uptime
security updates
dead application counter
logged in users

Admin button: (Leads to login screen >)

Main Landing (Admin):
same start screen with tiles
Different icons for different services

SmartHome
Media Share
media
Security 
Sysadmin (Higher perms to be visable) - Proxmox, DNS control, Network Control, docker, piHole