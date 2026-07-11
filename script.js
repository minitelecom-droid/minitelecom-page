:root {
  --bg: #f5f7fb;
  --surface: #ffffff;
  --text: #111827;
  --muted: #667085;
  --line: #e5e7eb;
  --blue: #2563eb;
  --blue-dark: #1d4ed8;
  --black: #111111;
  --radius-lg: 30px;
  --radius-md: 20px;
  --shadow: 0 18px 50px rgba(17, 24, 39, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding-bottom: 86px;
  font-family:
    Pretendard,
    "Noto Sans KR",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background: var(--bg);
  color: var(--text);
  word-break: keep-all;
}

a {
  color: inherit;
  text-decoration: none;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(229, 231, 235, 0.9);
  backdrop-filter: blur(14px);
}

.header-inner {
  width: min(100% - 28px, 1180px);
  height: 66px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.05em;
}

.header-call {
  padding: 11px 16px;
  border-radius: 999px;
  background: var(--black);
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
}

.hero {
  width: min(100% - 24px, 1180px);
  margin: 18px auto 0;
  padding: 54px 22px 42px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 80% 10%, rgba(37, 99, 235, 0.22), transparent 32%),
    linear-gradient(150deg, #ffffff 0%, #edf3ff 100%);
  box-shadow: var(--shadow);
}

.hero-inner {
  text-align: center;
}

.hero-label {
  display: inline-flex;
  margin: 0 0 16px;
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: var(--blue);
  font-size: 13px;
  font-weight: 900;
}

.hero h1 {
  margin: 0;
  font-size: clamp(48px, 15vw, 80px);
  line-height: 0.96;
  letter-spacing: -0.075em;
}

.hero-text {
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
  letter-spacing: -0.03em;
}

.service-buttons {
  margin: 28px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.service-buttons a {
  padding: 15px 10px;
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 8px 22px rgba(17, 24, 39, 0.04);
}

.hero-actions {
  margin-top: 24px;
  display: grid;
  gap: 12px;
}

.main-button {
  min-height: 76px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  color: #ffffff;
  text-align: left;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.main-button:active {
  transform: scale(0.98);
}

.main-button strong {
  font-size: 17px;
}

.main-button span {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
}

.call-button {
  background: var(--black);
  box-shadow: 0 14px 30px rgba(17, 17, 17, 0.2);
}

.fold-button {
  background: var(--blue);
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.25);
}

.foldable-section,
.service-section,
.final-call {
  width: min(100% - 24px, 1180px);
  margin: 88px auto 0;
}

.section-title {
  margin-bottom: 28px;
}

.section-title > p {
  margin: 0 0 10px;
  color: var(--blue);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.06em;
}

.section-title h2 {
  margin: 0;
  font-size: clamp(36px, 10vw, 62px);
  line-height: 1.05;
  letter-spacing: -0.065em;
}

.section-title span {
  display: block;
  margin-top: 16px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.product-grid {
  display: grid;
  gap: 16px;
}

.product-card {
  min-height: 360px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  background:
    linear-gradient(160deg, #ffffff 0%, #edf3ff 100%);
  box-shadow: var(--shadow);
}

.product-card:nth-child(2) {
  background:
    linear-gradient(160deg, #ffffff 0%, #f4ecff 100%);
}

.product-badge {
  color: var(--blue);
  font-size: 13px;
  font-weight: 900;
}

.product-card h3 {
  margin: 8px 0 0;
  font-size: 38px;
  letter-spacing: -0.06em;
}

.product-card p {
  margin: 10px 0 0;
  color: var(--muted);
}

.product-card a {
  margin-top: auto;
  min-height: 54px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  background: var(--black);
  color: #ffffff;
  font-weight: 800;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.service-card {
  min-height: 205px;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--surface);
}

.service-card h3 {
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.05em;
}

.service-card p {
  margin: 10px 0 18px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
}

.service-card a {
  margin-top: auto;
  color: var(--blue);
  font-size: 14px;
  font-weight: 900;
}

.final-call {
  margin-bottom: 70px;
  padding: 42px 24px;
  border-radius: var(--radius-lg);
  background: linear-gradient(145deg, var(--blue) 0%, var(--blue-dark) 100%);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 55px rgba(37, 99, 235, 0.26);
}

.final-call > p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
}

.final-call h2 {
  margin: 14px 0 28px;
  font-size: clamp(32px, 9vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.06em;
}

.final-call a {
  min-height: 64px;
  padding: 0 22px;
  display: inline-grid;
  place-items: center;
  border-radius: 18px;
  background: #ffffff;
  color: var(--text);
  font-size: 18px;
  font-weight: 900;
}

.footer {
  padding: 40px 24px 120px;
  background: #ffffff;
  border-top: 1px solid var(--line);
  text-align: center;
}

.footer strong {
  font-size: 20px;
}

.footer p {
  margin: 12px auto 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.footer a {
  display: inline-block;
  margin-top: 14px;
  color: var(--blue);
  font-weight: 900;
}

.bottom-call {
  position: fixed;
  z-index: 200;
  left: 14px;
  right: 14px;
  bottom: max(14px, env(safe-area-inset-bottom));
}

.bottom-call a {
  min-height: 66px;
  display: grid;
  place-items: center;
  border-radius: 21px;
  background: var(--black);
  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  box-shadow: 0 16px 35px rgba(17, 17, 17, 0.28);
}

@media (min-width: 760px) {
  body {
    padding-bottom: 0;
  }

  .hero {
    padding: 72px 54px;
  }

  .hero-inner {
    max-width: 720px;
    margin: 0 auto;
  }

  .service-buttons {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero-actions {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .bottom-call {
    display: none;
  }

  .footer {
    padding-bottom: 50px;
  }
}

@media (min-width: 1024px) {
  .hero {
    margin-top: 28px;
  }

  .foldable-section,
  .service-section,
  .final-call {
    margin-top: 120px;
  }

  .service-card {
    min-height: 230px;
    padding: 26px;
  }
}