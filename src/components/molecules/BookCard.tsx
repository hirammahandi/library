import { AllBooksFragment, GetAuthorOfBookFragment } from "@/__generated__/graphql";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Button,
  CardActions,
  CardContainer,
  CardContent,
  CardHeader,
  CardImage,
  Divider,
  TextBlock,
  TruncateParagraph,
} from "../ui/atoms";
import BookAuthors from "./BookAuthors";

// Image
import emptyImage from "@/assets/images/empty-images.png";

type BookCardProps = {
  book: AllBooksFragment;
  authors: { node: GetAuthorOfBookFragment }[];
};

const BookCard: FC<BookCardProps> = ({ book, authors }) => {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{book.title}</h3>
      </CardHeader>
      <CardImage>
        <Image src={book.cover || emptyImage} alt="book cover" priority fill />
      </CardImage>
      <CardContent>
        <TruncateParagraph>{book.description}</TruncateParagraph>
        <Divider orientation="horizontal" />
        <TextBlock>Authors:</TextBlock>
        <BookAuthors authors={authors} />
      </CardContent>
      <CardActions>
        <Link href={`/books/${book.id}`}>
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </Link>
      </CardActions>
    </CardContainer>
  );
};

export default BookCard;
