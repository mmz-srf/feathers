## Manifest


### What belongs into SRF Feathers?
* Components that are not specifically made for one application and have a large chance of being reusable.
* Components/definitions that were developed in an application and were or would be copied into a different application.
    * For example Colors, Mixins, Global layout definitions, etc.

### What does not belong into SRF Feathers?
* Application-specific components
* Business logic, e.g. calling some backend API
* Demo data inside the components

## Versioning
* "One version fits all": The version specified in `package.json` is the identifying version
* Versioning is done according to the usual [semver](https://semver.org/)
    * MAJOR version when you make incompatible API changes
    * MINOR version when you add functionality in a backwards compatible manner
    * PATCH version when you make backwards compatible bug fixes

## Pull Request Workflow
* Everyone can open pull requests.
* Pull requests should be posted in [#pull-requests-feathers](https://srf.slack.com/archives/C039AHKVAPK)
* At least one other member of the SRF CMS teams must review & approve the pull request before merging.
* All checks must be successfully completed.

## Decisions

2020.03.28: srf-feathers as a name is signed off! Public repository and npm package as well.
