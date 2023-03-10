import { GetAuthorOfBookFragment, GetBookFragment } from "@/__generated__/graphql";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Button,
  DetailsActions,
  DetailsContainer,
  DetailsContent,
  DetailsImage,
  Divider,
  Loader,
  Paragraph,
  SelectCount,
  TextIndicator,
} from "../ui/atoms";
import BookAuthors from "./BookAuthors";

// Image
import emptyImage from "@/assets/images/empty-images.png";
import { AuthorOfBook } from "./__types";

type BookDetailsProps = {
  book: GetBookFragment;
  authors: AuthorOfBook;
  loading?: boolean;
  countValue: number;
  handleRefetchOnCount: (value: number) => void;
  handleDeleteBookById: (id: string) => Promise<void>;
};

const BookDetails: FC<BookDetailsProps> = ({
  book,
  authors,
  loading,
  countValue,
  handleDeleteBookById,
  handleRefetchOnCount,
}) => {
  return (
    <DetailsContainer>
      <DetailsImage>
        <Image
          src={book.cover || emptyImage}
          alt="book cover"
          priority
          fill
          style={{ borderRadius: "8px 0 0 8px" }}
        />
      </DetailsImage>
      <DetailsContent>
        <TextIndicator label="Title" content={book.title} />
        <TextIndicator label="ISBN" content={book.isbn} />
        <TextIndicator label="Publication year" content={book.publicationYear} />
        <TextIndicator
          label="Description"
          content={
            <Paragraph st={{ border: "thin solid #ccc", padding: 6, borderRadius: 4 }}>
              {book.description}
            </Paragraph>
          }
        />
        <span>Authors:</span>
        <SelectCount countValue={countValue} handleRefetchOnCount={handleRefetchOnCount} />
        <BookAuthors authors={authors} />
        <Divider orientation="horizontal" />
        <DetailsActions>
          {loading ? (
            <Loader size={30} />
          ) : (
            <>
              <Link href={`/books/${book.id}/edit`}>
                <Button variant="outlined" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDeleteBookById(book.id)}
              >
                Delete
              </Button>
            </>
          )}
        </DetailsActions>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default BookDetails;
