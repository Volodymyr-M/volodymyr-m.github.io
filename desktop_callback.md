---
layout: compress
permalink: desktop_callback.html
---

{% assign default_landing_data = site.data[site.active_lang].landing-workspace-default %}
<html lang="{{ site.active_lang }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ default_landing_data.desktop_callback.title }}</title>
    <link rel="stylesheet" href="/styles/styles.css">
    <link rel="stylesheet" href="/styles/styles-windows.css">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: var(--background);
        }
        .card {
            background: var(--surface);
            box-shadow: var(--shadow-lg);
            border-radius: var(--radius-md);
            padding: var(--spacing-lg);
            text-align: center;
            max-width: 465px;
            width: 100%;
        }
        .illustration img {
            max-width: 100%;
            height: auto;
            margin-bottom: var(--spacing-md);
        }
        .card p {
            color: var(--text-primary);
            opacity: 0.8;
            margin-bottom: var(--spacing-sm);
            line-height: 1.6;
        }
        .card a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color var(--transition-fast);
        }
        .card a:hover {
            color: var(--primary-hover);
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: var(--spacing-md);
        }
        .issue {
            display: none;
        }
    </style>
    {% include language_head.html %}
</head>
<body>
    <div class="card">
        <div class="illustration">
            <img src="/images/look_up.png" alt="Look Up">
        </div>
        <h2>{{ default_landing_data.desktop_callback.cta }}</h2>
        <p class="issue">{{ default_landing_data.desktop_callback.success }}</p>
        <p class="issue">{{ default_landing_data.desktop_callback.issue }} <a id="redirectLink" href="#" onclick="redirectToDesktop()">{{ default_landing_data.desktop_callback.click }}</a></p>
        <div class="logo"><img src="/images/logo.png" alt="Ingantt Logo" class="logo-img"> <span class="logo-text">{{ default_landing_data.header.logo_text }}</span></div>
        <button id="theme-toggle" style="display: none;">
            <i class="fa-sun"></i>
        </button>
    </div>
    <script type="text/javascript">
        let appLinkUrl = '';
        
        function redirectToDesktop() {
          if (appLinkUrl === '') {
            const appLinkScheme = "ingantt";
            const appLinkAuthority = "ingantt";
            appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/callback${window.location.search}`;
            const linkElement = document.getElementById('redirectLink');
            if (linkElement) {
              linkElement.href = appLinkUrl;
              linkElement.removeAttribute('onclick');
            }
          }
          setTimeout(() => {
            window.location.href = appLinkUrl;
          }, 100);
          return false;
        }
        
        window.onload = redirectToDesktop;
        </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                var issueElement = document.querySelectorAll('.issue');
                if (issueElement) {
                    issueElement.forEach(t => t.style.display = 'block');
                }
            }, 7000);
        });
    </script>
    <script src="/js/main.js"></script>
</body>
</html>