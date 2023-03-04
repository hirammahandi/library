import {
  AuthorToBookCreateAuthor,
  AuthorToBookCreateAuthorRelation,
  CreateBookMutationVariables,
} from "@/__generated__/graphql";
import { TextCenter } from "@/components/ui/atoms";
import { GET_AUTHORS_FOR_SELECT } from "@/features/authors";
import { CREATE_BOOK, CreateBookContainer } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { useMutation, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ChangeEventHandler, FormEventHandler, useMemo, useState } from "react";
import { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const getFileUrl = (files: FileList | null, handleFileUrl: (url: string) => void) => {
  if (files) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      const result = reader.result;
      if (result) {
        const url = result.toString();
        handleFileUrl(url);
      }
    };
  }
};

type AuthorsToCreate = {
  create: Omit<AuthorToBookCreateAuthor, "books">;
};

const CreateBookPage = () => {
  // Books
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [cover, setCover] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [description, setDescription] = useState("");
  const [authorsId, setAuthorsId] = useState<string[]>([]);
  const [isAddAuthorActive, setIsAddAuthorActive] = useState(false);

  // Authors
  const [authorName, setAuthorName] = useState("");
  const [authorBirthday, setAuthorBirthday] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorReview, setAuthorReview] = useState("");

  const [authorAdded, setAuthorAdded] = useState<AuthorsToCreate[]>([]);

  const { data } = useQuery(GET_AUTHORS_FOR_SELECT, {
    variables: {
      firstAuthors: 100,
    },
  });
  
  const [createBook, { loading }] = useMutation(CREATE_BOOK);

  const authors = data?.authorCollection?.edges;

  const authorsOptions = useMemo(
    () =>
      authors && authors.length
        ? authors.map<{ value: string; label: string }>((author) => ({
            value: author!.node.id,
            label: author!.node.name,
          }))
        : [],
    [authors]
  );

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeIsbn: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsbn(e.target.value);
  };

  const handleChangeCover: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    getFileUrl(files, setCover);
  };

  const handleChangePublicationYear: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPublicationYear(e.target.value);
  };

  const handleChangeAuthorsId = (newValue: MultiValue<unknown>) => {
    const valuesIds = (newValue as MultiValue<{ value: string; label: string }>).map(
      ({ value }) => value
    );
    setAuthorsId(valuesIds);
  };

  const handleChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  const handleIsAddAuthorActive = () => setIsAddAuthorActive(!isAddAuthorActive);

  const handleAuthorName: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAuthorName(e.target.value);

  const handleAuthorBirthday: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAuthorBirthday(e.target.value);

  const handleAuthorAvatar: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    getFileUrl(files, setAuthorAvatar);
  };

  const handleAuthorReview: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setAuthorReview(e.target.value);

  const handleAddAuthor = () => {
    const authorsToCreate: AuthorsToCreate = {
      create: {
        name: authorName,
        avatar: authorAvatar,
        birthday: authorBirthday,
        review: authorReview,
      },
    };

    setAuthorAdded([...authorAdded, authorsToCreate]);
    resetAuthors();
  };

  const resetAuthors = () => {
    setAuthorName("");
    setAuthorBirthday("");
    setAuthorAvatar("");
    setAuthorReview("");
  };

  const handleCreateBook: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const authorsLinks = authorsId.map<{ link: string }>((id) => ({ link: id }));

      let authors: AuthorToBookCreateAuthorRelation[] = [];

      if (authorsLinks.length && authorAdded.length) authors = [...authorsLinks, ...authorAdded];
      else if (authorsLinks.length) authors = authorsLinks;
      else if (authorAdded.length) authors = authorAdded;

      const variables: CreateBookMutationVariables = {
        input: {
          title,
          description,
          isbn,
          publicationYear: Number(publicationYear),
          cover,
          authors,
        },
      };

      console.log(variables);

      await createBook({ variables: { ...variables } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TextCenter>CREATE A BOOK</TextCenter>
      <CreateBookContainer />;
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_AUTHORS_FOR_SELECT,
    variables: {
      firstAuthors: 100,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default CreateBookPage;
/* 
  <div
      style={{
        width: 600,
        border: "thin solid",
        minHeight: 300,
        marginInline: "auto",
        padding: 10,
      }}
    >
      <h4 style={{ textAlign: "center" }}>Book Form</h4>
      <form
        onSubmit={handleCreateBook}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>
            Title
            <input
              type="text"
              name="title"
              id="title"
              style={{ display: "block", width: "250px" }}
              value={title}
              onChange={handleChangeTitle}
            />
          </label>
          <label>
            ISBN
            <input
              type="text"
              name="isbn"
              id="isbn"
              style={{ display: "block", width: "250px" }}
              value={isbn}
              onChange={handleChangeIsbn}
            />
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>
            Cover
            <input
              type="file"
              name="cover"
              id="cover"
              style={{ display: "block", width: "250px" }}
              onChange={handleChangeCover}
            />
          </label>
          <label>
            Publication Year
            <input
              type="number"
              inputMode="numeric"
              name="year"
              id="year"
              style={{ display: "block", width: "250px" }}
              value={publicationYear}
              onChange={handleChangePublicationYear}
            />
          </label>
        </div>
        <label>
          Description
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            style={{ display: "block", width: "100%" }}
            value={description}
            onChange={handleChangeDescription}
          ></textarea>
        </label>
        <div
          style={{
            maxWidth: 600,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <label>
            Select the authors
            <Select
              styles={{
                container: (baseStyles) => ({
                  ...baseStyles,
                  width: "400px",
                }),
              }}
              options={authorsOptions}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              onChange={(newValue) => handleChangeAuthorsId(newValue)}
            />
          </label>
          <button
            type="button"
            style={{ padding: 6, maxWidth: 150, marginTop: 20 }}
            onClick={handleIsAddAuthorActive}
          >
            {isAddAuthorActive ? "Close Author" : "Add Author"}
          </button>
        </div>
        {isAddAuthorActive && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                Author&apos;s Name
                <input
                  style={{ display: "block", width: "250px" }}
                  type="text"
                  name="author-name"
                  id="author-name"
                  value={authorName}
                  onChange={handleAuthorName}
                />
              </label>
              <label>
                Author&apos;s Birthday
                <input
                  style={{ display: "block", width: "250px" }}
                  type="date"
                  name="author-birthday"
                  id="author-birthday"
                  value={authorBirthday}
                  onChange={handleAuthorBirthday}
                />
              </label>
            </div>

            <label>
              Author&apos;s Avatar
              <input
                type="file"
                name="author-avatar"
                id="author-avatar"
                style={{ display: "block", width: "250px" }}
                onChange={handleAuthorAvatar}
              />
            </label>
            <label>
              Author&apos;s Review
              <textarea
                style={{ display: "block", width: "100%" }}
                name="author-review"
                id="author-review"
                cols={30}
                rows={10}
                value={authorReview}
                onChange={handleAuthorReview}
              ></textarea>
            </label>
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <button type="button" style={{ padding: 6 }} onClick={handleAddAuthor}>
                Add
              </button>
            </div>
          </div>
        )}
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button type="reset" style={{ padding: 6 }}>
            <Link href="/books">Cancel</Link>
          </button>
          <button type="submit" style={{ padding: 6 }} disabled={loading}>
            Create
          </button>
        </div>
      </form>
    </div>
*/
