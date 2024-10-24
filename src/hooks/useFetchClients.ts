import { useEffect, useState } from "react";
import { Client } from "../Components/ClientList/ClientList.types";

const API_KEY = process.env.REACT_APP_API_KEY || "";
const INSTANCE_NAME = process.env.REACT_APP_INSTANCE_NAME || "";
const USER = process.env.REACT_APP_USER || "";
const BASE_URL = process.env.BASE_URL;

const useFetchClients = (searchQuery: string) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchClients(search: string) {
      setLoading(true);

      try {
        const res = await fetch(
          `${BASE_URL}?offset=0&limit=30&fulltext==${search}`,
          {
            method: "GET",
            headers: {
              Authorization: "Basic " + btoa(`${USER}:${API_KEY}`),
              "X-Instance-Name": INSTANCE_NAME,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setClients(data.data);
      } catch {
        alert("There was a problem loading data...");
      } finally {
        setLoading(false);
      }
    }
    fetchClients(searchQuery);
  }, [searchQuery]);

  return {
    clients,
    loading,
  };
};

export default useFetchClients;
