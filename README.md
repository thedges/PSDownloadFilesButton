# PSDownloadFilesButton
Simple page button to download all files (chatter files...not attachments) associated to a record. If multiple files exist, a zip file is downloaded else a single file is downloaded with configured filename. This component utilizes this undocumented feature as detailed in [this article](http://cropredysfdc.com/2016/03/16/download-multiple-contentversion-files-as-zip/). The limitations/warnings using this feature are:
* Only works for "chatter files" attached to current record (not attachments)
* Is undocumented feature so could break at any moment...verify before demos.

Here is the component in action and checkout [this video](https://github.com/thedges/PSDownloadFilesButton/blob/master/PSDownloadFilesButton.mp4) 

![alt text](https://github.com/thedges/PSDownloadFilesButton/blob/master/PSDownloadFilesButton.gif "Sample Image")

Simple configuration parameters for the component:

| Parameter | Description |
| --------- | ----------- |
| Label | The text label for the button |
| RecordId | For community only, provide a value of {!recordId} for this field so current recordId is passed to component |

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
