---
layout: text
title: Open Ingantt
---

Click "**Open Ingantt**" in the dialog that you see to sign in Ingantt to Google.

Click the link below if:

* If the dialog is not opened for you automatically.
* If Ingantt is not updated with the list of your Google Drive projects.

<p><a id="redirectLink" href="#" onclick="redirectToDesktop()">Click to Sign in Ingantt to Google account</a></p>

<script type="text/javascript">

function getFragmentParameter(paramName) {
  const fragment = window.location.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get(paramName);
}

let appLinkUrl = '';

function redirectToDesktop() {
  if (appLinkUrl === '') {
    const appLinkScheme = "ingantt-scheme";
    const appLinkAuthority = "ingantt.com";
    const idToken = getFragmentParameter("id_token");
    const accessToken = getFragmentParameter("access_token");
    appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?access_token=${accessToken}&id_token=${idToken}`;
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
