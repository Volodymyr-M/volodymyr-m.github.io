---
layout: open
title: Open Ingantt
---

Click "**Open**" in the dialog above.

<p><a id="redirectLink" href="#" onclick="redirectToDesktop()">If you don't see a dialog or Ingantt does not sign in, click here</a>.</p>

<script type="text/javascript">

function getFragmentParameter(paramName) {
  const fragment = window.location.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get(paramName);
}

let appLinkUrl = '';

function redirectToDesktop() {
  if (appLinkUrl === '') {
    const appLinkScheme = "ingantt";
    const appLinkAuthority = "ingantt";
    const code = getFragmentParameter("code");
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
