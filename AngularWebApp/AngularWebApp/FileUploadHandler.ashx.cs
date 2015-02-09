using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AngularWebApp
{
    /// <summary>
    /// Summary description for FileUploadHandler
    /// </summary>
    public class FileUploadHandler : IHttpHandler
    {
        private JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            context.Response.ContentType = "application/json";
            if (context.Request["user"] != null
                && context.Request["user"] == "zhou"
                //&& context.Request["password"] != null
                //&& context.Request["password"] == "iloveyou@1014"
                && context.Request["action"] != null
                && context.Request["action"] == "u")
            {
                if (context.Request.Files.Count > 0)
                {
                    // Get the uploaded image from the Files collection
                    var httpPostedFile = HttpContext.Current.Request.Files[0];
                    // Validate the uploaded image(optional)

                    // Get the complete file path
                    var fileSavePath = GenerateUploadFileName(context.Server.MapPath("~/FileUploads"));
                    //var fileSavePath = Path.Combine(context.Server.MapPath("~/FileUploads"), httpPostedFile.FileName);

                    // Save the uploaded file to "UploadedFiles" folder
                    httpPostedFile.SaveAs(fileSavePath);

                    context.Response.Write(javaScriptSerializer.Serialize(new { Result = true, Message = "File upload sucessfully!" }));
                }
                else
                {
                    context.Response.Write(javaScriptSerializer.Serialize(new { Result = false, Message = "No image file found to upload." }));
                }
            }
            else
            {
                context.Response.Write(javaScriptSerializer.Serialize(new { Result = false, Message = "You are not a validate user." }));
            }
        }

        public string GenerateUploadFileName(string rootFolderFullPath)
        {
            if (!Directory.Exists(rootFolderFullPath))
            {
                Directory.CreateDirectory(rootFolderFullPath);
            }

            var subFolderName = DateTime.Now.ToString("yyyy-MM-dd");
            var subFolderFullPath = Path.Combine(rootFolderFullPath, subFolderName);
            if (!Directory.Exists(subFolderFullPath))
            {
                Directory.CreateDirectory(subFolderFullPath);
            }

            var fileName = Guid.NewGuid().ToString() + ".JPG";
            var fileFullPath = Path.Combine(subFolderFullPath, fileName);
            while (Directory.Exists(fileFullPath))
            {
                fileName = Guid.NewGuid().ToString() + ".JPG";
                fileFullPath = Path.Combine(subFolderFullPath, fileName);
            }
            return fileFullPath;
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}