import moment from "moment";
import React from "react";

const InfoModal = ({ modalId, orderSelected }) => {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box max-w-[58rem]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-white">
            ✕
          </button>
        </form>
        <div className="max-w-3xl mx-auto bg-white rounded-lg  p-6">
          <div className="border-b pb-4 mb-4">
            <h3 className="text-lg font-bold text-black simpalFont">Details</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-bold text-gray-800 capitalize">
                Name:
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {
                  //@ts-ignore
                  orderSelected?.name
                }
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-bold text-gray-800 capitalize">
                Email:
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {
                  //@ts-ignore
                  orderSelected?.email
                }
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-bold text-gray-800 capitalize">
                Phone:
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {
                  //@ts-ignore
                  orderSelected?.phone
                }
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-bold text-gray-800 capitalize">
                Date:
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {orderSelected?.createdAt
                  ? moment(orderSelected?.createdAt).format(
                      "DD-MM-YYYY HH:mm:ss"
                    )
                  : "-"}{" "}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-bold text-gray-800 capitalize">
                Message:
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {
                  //@ts-ignore
                  orderSelected?.message
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default InfoModal;
