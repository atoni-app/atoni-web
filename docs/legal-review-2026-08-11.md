# ATONI legal and store-policy review

**Review date:** 11 August 2026
**Scope:** website privacy policy and terms in Polish, English and Spanish; App Store and Google Play publication readiness.
**Status:** working compliance review, not a legal opinion.

## Documents and publication model

- Polish is the source version. English and Spanish versions follow the same structure and material meaning.
- Public routes are `/privacy`, `/terms`, `/en/privacy`, `/en/terms`, `/es/privacy` and `/es/terms`.
- The App Store listing should use Apple’s Standard Licensed Application End User License Agreement. The ATONI Terms supplement it. Do not upload the current ATONI Terms as a custom Apple EULA without a separate review against Apple’s minimum terms.
- Store disclosures must be checked again against the final iOS and Android binaries and every included SDK before submission.

## Review findings

### Apple App Store

- Apple requires a privacy-policy link in App Store Connect and an easily accessible link inside the App.
- The policy must identify collected data, collection and use, third parties, retention and deletion, and how consent can be withdrawn or deletion requested.
- The current documents cover these points for the declared version 1.0 behaviour.
- Apple’s standard EULA is the recommended licence route. The Terms clarify that the Operator, rather than Apple, provides support and handles product claims.

Official sources:

- https://developer.apple.com/app-store/review/guidelines/
- https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
- https://www.apple.com/legal/internet-services/itunes/dev/minterms/

### Google Play

- Every published app must complete the Data safety form and provide a privacy-policy URL, including an app that declares no collection or sharing.
- The Data safety declaration and privacy policy must match the final app and its SDKs.
- Selecting age 13–15 may include children in some locations. If any selected target group includes children, the Families Policy requirements apply.
- Before submission, inspect the final AAB, permissions and SDK behaviour, especially identifiers, notifications and any analytics.

Official sources:

- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/9867159
- https://support.google.com/googleplay/android-developer/answer/11043825

### European Union and international users

- The privacy policy states the controller, purposes and legal bases, recipients, transfers, retention, rights and complaint route expected under the GDPR.
- The Terms preserve mandatory consumer protections in the user’s country, including rights concerning digital content, refunds, conformity and liability.
- Store purchase flows and consent wording must be checked against the final price presentation and the start of digital supply.

Official sources:

- https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/consumer-rights-directive_en

### Minors and Brazil

- ATONI is described as 13+ and not directed to children under 13. This does not remove rules that protect users aged 13–17.
- Brazil’s ECA Digital has been in force since 17 March 2026 and includes age-assurance, parental-control and child-safety obligations for services aimed at or likely to be accessed by children or adolescents.
- Recommended launch position: exclude Brazil until the age-assurance route is implemented and reviewed, or obtain local legal advice confirming that store/device signals and the App design satisfy the applicable requirements.

Official sources:

- https://www.gov.br/anpd/pt-br/assuntos/eca-digital/eca-digital-english
- https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/

## Required checks before launch

1. Confirm whether Brazil is excluded from initial App Store and Google Play availability.
2. Confirm the Google Play target-audience selections and complete the Families Policy review for age 13–15.
3. Audit the final iOS build and Android AAB, including all SDKs and permissions, against App Privacy and Data safety answers.
4. Confirm that version 1.0 sends no external analytics events and that optional notification processing matches the policy.
5. Use the Apple standard EULA unless a separately reviewed custom EULA is intentionally selected.
6. Add the final App Store and Google Play product links to the website after the listings exist.
7. Have a qualified lawyer approve the documents and the launch-country list before publication.
