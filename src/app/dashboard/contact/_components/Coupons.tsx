import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./style/manageSubscription.module.scss";
import { tableHeading } from "./data";
import CouponsTable from "./CouponsTable";
import Loader from "@/Components/Loading/Loader";

interface Contact {
  createdAt?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const Coupons = () => {
  const [page, setPage] = useState<number>(1);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalItem, setTotalItem] = useState<number>(0);
  const [loder, setLoder] = useState(false);
  useEffect(() => {
    const fetchContacts = async () => {
      setLoder(true);
      const res = await fetch(`/api/contact?page=${page}&limit=5`);
      const data = await res.json();
      if (data?.success) {
        setContacts(data?.data);
        setTotalPages(data?.pagination?.totalPages);
        setTotalItem(data?.pagination?.total);
        setLoder(false);
      }
    };

    fetchContacts();
  }, [page]);

  const renderLoading = () => {
    if (loder) {
      return <Loader />;
    }
  };
  return (
    <div className={clsx(styles.leftSidebarMaindDiv, "")}>
      {/* heading section */}
      <div className={clsx(" ", styles.upperDiv)}>
        <h4 className="mb-0 lg:px-8 px-4 pt-4">Contact</h4>
        <p className="lg:px-8 px-4 text-black">{`Total number of queries: ${totalItem}`}</p>{" "}
      </div>
      <div className="mx-0">
        <div className="px-0 ">
          <CouponsTable
            dataTableHeading={tableHeading.filter(
              (heading) => heading !== undefined
            )}
            page={page}
            setPage={setPage}
            contacts={contacts}
            setContacts={setContacts}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        </div>
      </div>
      {renderLoading()}
    </div>
  );
};

export default Coupons;
