import { AllAuthorsFragment } from "@/__generated__/graphql";
import { FC } from "react";
import { Button, CardActions, CardContainer, CardContent, CardImage } from "../ui/atoms";
import Image from "next/image";

// Image
import emptyImage from "@/assets/images/empty-images.png";
import Link from "next/link";

type AuthorCardProps = {
  author: AllAuthorsFragment;
};

const AuthorCard: FC<AuthorCardProps> = ({ author }) => {
  return (
    <CardContainer>
      <CardImage height={150}>
        <Image
          src={author.avatar || emptyImage}
          alt="book cover"
          priority
          fill
          style={{ objectFit: "cover" }}
        />
      </CardImage>
      <CardContent>{author.name}</CardContent>
      <CardActions>
        <Link href={`/authors/${author.id}`}>
          <Button variant="outlined" color="primary">
            Details
          </Button>
        </Link>
      </CardActions>
    </CardContainer>
  );
};

export default AuthorCard;
