import { GetAuthorFragment } from "@/__generated__/graphql";
import { BookOfAuthor } from "./__types";
import { FC } from "react";
import {
  Button,
  DetailsActions,
  DetailsContainer,
  DetailsContent,
  DetailsImage,
  Loader,
  Paragraph,
  SelectCount,
  TextIndicator,
} from "../ui/atoms";
import Image from "next/image";

// Image
import emptyImage from "@/assets/images/empty-images.png";
import Link from "next/link";
import BooksAuthor from "./BooksAuthor";

type AuthorDetailProps = {
  author: GetAuthorFragment;
  books: BookOfAuthor;
  loading?: boolean;
  countValue: number;
  handleDeleteAuthorById: (id: string) => Promise<void>;
  handleRefetchOnCount: (value: number) => void;
};

const AuthorDetail: FC<AuthorDetailProps> = ({
  author,
  books,
  loading,
  countValue,
  handleDeleteAuthorById,
  handleRefetchOnCount,
}) => {
  return (
    <DetailsContainer>
      <DetailsImage>
        <Image
          src={author.avatar || emptyImage}
          alt="author avatar"
          priority
          fill
          style={{ borderRadius: "8px 0 0 8px", objectFit: "cover" }}
        />
      </DetailsImage>
      <DetailsContent>
        <TextIndicator label="Name" content={author.name} />
        <TextIndicator label="Birthday" content={author.birthday} />
        <TextIndicator
          label="Review"
          content={
            <Paragraph st={{ border: "thin solid #ccc", padding: 6, borderRadius: 4 }}>
              {author.review}
            </Paragraph>
          }
        />
        <span>Books: </span>
        <SelectCount countValue={countValue} handleRefetchOnCount={handleRefetchOnCount} />
        <BooksAuthor books={books} />
        <DetailsActions>
          {loading ? (
            <Loader size={30} />
          ) : (
            <>
              <Link href={`/authors/${author.id}/edit`}>
                <Button variant="outlined" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDeleteAuthorById(author.id)}
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

export default AuthorDetail;
