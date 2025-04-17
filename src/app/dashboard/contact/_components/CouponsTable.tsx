import clsx from "clsx";
import styles from "./style/manageSubscriptionTable.module.scss";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import InfoModal from "./InfoModal";
import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
interface DataTableHeading {
  heading: string;
}

interface CouponsTableProps {
  dataTableHeading: DataTableHeading[];
  page: number;
  setPage: (page: number) => void;
  contacts: {
    createdAt?: string;
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
    _id?: string;
  }[];
  setContacts: (
    contacts: {
      createdAt?: string;
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    }[]
  ) => void;
  totalPages: number;
  setTotalPages: (totalPages: number) => void;
}

function CouponsTable(props: CouponsTableProps) {
  const { dataTableHeading, setPage, contacts, totalPages, page } = props;
  const [orderSelected, setOrderSelected] = useState({});

  const handlePageClick = (event: { selected: number }) => {
    setPage(event?.selected + 1);
  };

  interface DeleteResponse {
    success: boolean;
  }

  const deleteFun = async (id: string): Promise<void> => {
    try {
      const res = await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });

      const data: DeleteResponse = await res.json();

      if (data?.success) {
        toast.success("Deleted successfully!");
        setPage(1);
      } else {
        toast.error("Failed to delete.");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Something went wrong.");
    } finally {
      // setDeleting(false);
    }
  };
  interface OnDeleteResult {
    isConfirmed: boolean;
  }

  const onDelete = (id: string): void => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result: OnDeleteResult) => {
      if (result.isConfirmed) {
        deleteFun(id);
      }
    });
  };

  return (
    <>
      <div className={clsx("tableScroll overflow-x-auto min-h-[400px]")}>
        <table className="table">
          <thead>
            <tr>
              {dataTableHeading?.length > 0
                ? dataTableHeading?.map((el, index) => {
                    return (
                      <th
                        key={index}
                        className={clsx("lg:ps-8 ps-4 py-4", styles.heading)}
                      >
                        <div className={clsx("flex gap-2 items-center ")}>
                          <span>{el?.heading}</span>
                        </div>
                      </th>
                    );
                  })
                : null}
              <th className={clsx("lg:ps-8 ps-4 py-4", styles.heading)}>
                <BsThreeDotsVertical />
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts?.length > 0
              ? contacts?.map((el, index) => {
                  return (
                    <tr key={index} className={clsx(styles.trTable)}>
                      <td className={clsx("lg:ps-8 ps-4 py-4")}>
                        {el?.createdAt
                          ? moment(el?.createdAt).format("DD-MM-YYYY HH:mm:ss")
                          : "-"}{" "}
                      </td>
                      <td className={clsx("lg:ps-8 ps-4 py-4")}>
                        {el?.name ? el?.name : "-"}
                      </td>
                      <td className={clsx("lg:ps-8 ps-4 py-4")}>
                        {el?.phone ? el?.phone : "-"}
                      </td>
                      <td
                        className={clsx(
                          "lg:ps-8 ps-4 text-center py-4",
                          styles.createdAt
                        )}
                      >
                        {el?.email ? el?.email : "-"}
                      </td>
                      <td
                        className={clsx(
                          "lg:ps-8 ps-4 text-center py-4",
                          styles.createdAt
                        )}
                      >
                        {el?.message ? el?.message : "-"}
                      </td>

                      <td>
                        <div className="dropdown dropdown-end cursor-pointer">
                          <div tabIndex={0} role="button" className=" m-1">
                            <BsThreeDotsVertical />
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm bg-white"
                          >
                            <li className="bg-white">
                              <button
                                className="btn bg-white border-none text-black text-start"
                                onClick={() => {
                                  const modal =
                                    document.getElementById(
                                      "orderDetailsModal"
                                    );
                                  if (modal) {
                                    (modal as HTMLDialogElement).showModal();
                                  }
                                  setOrderSelected(el);
                                }}
                              >
                                View Order Details
                              </button>
                            </li>

                            <li>
                              <button
                                className="btn bg-white border-none text-red-400 text-start"
                                onClick={() => {
                                  onDelete(el?._id ?? "");
                                }}
                              >
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        {/* <SeeMore /> */}
      </div>

      {<InfoModal modalId="orderDetailsModal" orderSelected={orderSelected} />}
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </>
  );
}

export default CouponsTable;
