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
    function findUrlParameter(parameterName) {
      let result = null;
      const searchParams = new URLSearchParams(location.search);
      if (searchParams.has(parameterName)) {
        result = searchParams.get(parameterName);
      }
      return result;
    }

    let appLinkUrl = '';

    function redirectToDesktop() {
      if (appLinkUrl == '') {
        const appLinkScheme = "ingantt-scheme";
        const appLinkAuthority = "ingantt.com";
        const idToken = findUrlParameter("id_token");
        const accessToken = findUrlParameter("access_token");
        appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?access_token=${accessToken}&id_token=${idToken}`;
        const linkElement = document.getElementById('redirectLink');
        linkElement.href = appLinkUrl;
        linkElement.removeAttribute('onclick');
      }
      setTimeout(() => {
        window.location.href = appLinkUrl;
      }, 100);
      return false;
    }
    window.onload = redirectToDesktop();
</script>
