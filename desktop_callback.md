---
layout: open
title: Ingantt
---

Click "**Open**" in the dialog above.

<p><a id="redirectLink" href="#" onclick="redirectToDesktop()">If you don't see a dialog or Ingantt does not continue further, click here</a>.</p>

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
