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
  Paragraph,
  TextIndicator,
} from "../ui/atoms";
import BookAuthors from "./BookAuthors";

// Image
import emptyImage from "@/assets/images/empty-images.png";

type BookDetailsProps = {
  book: GetBookFragment;
  authors: {
    node: GetAuthorOfBookFragment;
  }[];
  loading?: boolean;
  handleDeleteBookById: (id: string) => Promise<void>;
};

const BookDetails: FC<BookDetailsProps> = ({ book, authors, loading, handleDeleteBookById }) => {
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
        <BookAuthors authors={authors} />
        <Divider orientation="horizontal" />
        <DetailsActions>
          {loading ? (
            <span>Loading...</span>
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
