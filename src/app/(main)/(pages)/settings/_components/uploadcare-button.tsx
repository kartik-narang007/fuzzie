'use client'
import React, { useEffect, useRef } from "react";
import * as LR from '@uploadcare/blocks'
import { useRouter } from "next/navigation";

type Props = {
    onUpload?: any,
};

LR.registerBlocks(LR);

const UploadCareButton = ({onUpload}: Props) => {
    const router = useRouter();
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);
    
    useEffect(()=>{
      const handleUpload = async(e:any)=>{ 
        const file = await onUpload(e.detail.cdnUrl)
        if(file){
          router.refresh()
        }
      }
      ctxProviderRef.current.addEventListener('file-upload-success',handleUpload)
    },[])

  return <div>
    <lr-config
      ctx-name="my-uploader"
      pubkey="a484ffc44560b0b3cd79"
    />
    <lr-file-uploader-regular
      ctx-name="my-uploader"
      css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
    />
    <lr-upload-ctx-provider
      ref={ctxProviderRef}
      ctx-name='my-uploader'
    />
  </div>;
};

export default UploadCareButton;
