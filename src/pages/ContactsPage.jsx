import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import ContactList from "../components/ContactList/ContactList";
import {
  selectErrorContacts,
  selectItemsContacts,
  selectLoadingContacts,
} from "../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItemsContacts);
  const loading = useSelector(selectLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
