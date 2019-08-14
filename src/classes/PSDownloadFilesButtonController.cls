global with sharing class PSDownloadFilesButtonController {
    // {!URLFOR('/sfc/servlet.shepherd/version/download/' & delimitedSelectedIdList &'?')}

  @AuraEnabled
  global static String getContentDownloadLink(String recId)
  {
     List<ContentDocumentLink> cdlList = [select ContentDocument.LatestPublishedVersionId, Id, IsDeleted, LinkedEntityId, ShareType, SystemModstamp, Visibility from ContentDocumentLink where LinkedEntityId = :recId AND IsDeleted = false];
     System.debug('cdlList=' + JSON.serializePretty(cdlList));

     if (cdlList != null && cdlList.size() > 0)
     {
        String url = '/sfc/servlet.shepherd/version/download';
        for (ContentDocumentLink cdl : cdlList)
        {
           System.debug('docId=' + cdl.ContentDocument.LatestPublishedVersionId);
           url += '/' + cdl.ContentDocument.LatestPublishedVersionId;
        }

        url += '?name=test.zip';
        System.debug('url=' + url);

        return (url);
     }
     else {
        return (null);
     }

  }
}