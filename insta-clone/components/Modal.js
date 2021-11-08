import React, { Fragment, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';
import {Dialog, Transition} from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';

function Modal() {

    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    function closeModal() {
        setOpen(false);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    }
    return (
        <>
          
    
          <Transition.Root appear show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>
    
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 scale-100 translate-y-0"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 sm:scale-100 translate-y-0"
                  leaveTo="opacity-0 sm:scale-95 translate-y-4 sm:translate-y-0"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg 
                         px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform 
                         transition-all sm:my8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                             <div>   

                                 {selectedFile ? (
                                    <img src={selectedFile} 
                                        className="w-full object-contain cursor-pointer"
                                        onClick={() => setSelectedFile(null)} alt="" />
                                ) : (
                                    <div onClick={() => filePickerRef.current.click()} className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                                        <CameraIcon  className="h-6 w-6 text-red-600" aria-hidden="true" />

                                    </div>
                                )}
                                    
                                    <div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">Upload a photo</Dialog.Title>
                                        </div>
                                        <div>
                                            <input onChange={addImageToPost}  ref={filePickerRef} type='file'  />
                                        </div>
                                        <div className="mt-2">
                                            <input 
                                                className="border-none focus:ring-0 w-full text-center"
                                                type="text"
                                                ref={captionRef}
                                                placeholder="Please enter a caption..."
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">

                                        <button type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm 
                                            px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none 
                                            focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 
                                            disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                        > Upload Post

                                        </button>
                                    </div>
                            </div>


                    </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )
}

export default Modal
