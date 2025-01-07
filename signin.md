<!-- deprecated -->
---
layout: open
title: Open Ingantt
---

Click "**Open**" in the dialog above.

<p><a id="redirectLink" href="#" onclick="redirectToDesktop()">If you don't see a dialog or Ingantt does not sign in, click here</a>.</p>

<script type="text/javascript">

function getURLParameter(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}

let appLinkUrl = '';

function redirectToDesktop() {
  if (appLinkUrl === '') {
    const appLinkScheme = "ingantt";
    const appLinkAuthority = "ingantt";
    const code = getURLParameter("code");
    appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?code=${code}`;
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
