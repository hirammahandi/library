import { TextInput, TextareaInput } from "@/components/molecules";
import {
  Box,
  Button,
  Divider,
  Flex,
  GridContainer,
  GridItem,
  Loader,
  Paper,
  TextCenter,
  TextHelper,
} from "@/components/ui/atoms";
import { Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useCreateAuthor } from "../../services";

type Props = {
  model: ReturnType<typeof useCreateAuthor>;
};

const animatedComponents = makeAnimated();

const CreateAuthorPresenter = ({ model: { values, actions } }: Props) => {
  const { control, isAddBookActive, booksOptions, errors, loading, errorResponse, errorsBook } =
    values;
  const {
    handleIsAddBookActive,
    register,
    handleSubmit,
    handleCreateAuthor,
    registerBook,
    handleAddBookToCreate,
    handleBookCover,
    handleAvatarFile,
    handleSubmitBook,
    handleCancel,
  } = actions;

  return (
    <Paper maxWidth={600}>
      <Box st={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmit(handleCreateAuthor)}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <TextInput
                {...register("authorName")}
                error={Boolean(errors.authorName)}
                helperText={errors.authorName?.message}
                fullWidth
                label="Name"
                type="text"
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextInput
                {...register("authorBirthday")}
                error={Boolean(errors.authorBirthday)}
                helperText={errors.authorBirthday?.message}
                fullWidth
                label="Birthday"
                type="date"
              />
            </GridItem>
            <GridItem xs={12}>
              <TextInput
                error={Boolean(errors.authorAvatar)}
                helperText={errors.authorAvatar?.message}
                fullWidth
                onChange={handleAvatarFile}
                label="Avatar"
                type="file"
                accept="image/png"
              />
            </GridItem>
            <GridItem xs={12}>
              <TextareaInput
                {...register("authorReview")}
                error={Boolean(errors.authorReview)}
                helperText={errors.authorReview?.message}
                label="Review"
                cols={30}
                rows={10}
              />
            </GridItem>
            <GridItem xs={12}>
              <Flex gap={8} alignItems="baseline">
                <Controller
                  control={control}
                  name="booksId"
                  render={({ field: { name, onBlur, onChange, ref, value } }) => (
                    <div>
                      <Select
                        styles={{
                          container: (baseStyles) => ({
                            ...baseStyles,
                            width: "400px",
                          }),
                          control: (baseStyle) => ({
                            ...baseStyle,
                            borderColor: errors.booksId ? "red" : "hsl(0, 0%, 80%);",
                          }),
                        }}
                        ref={ref}
                        name={name}
                        onBlur={onBlur}
                        value={value}
                        onChange={(newValue) => onChange(newValue)}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={booksOptions}
                        placeholder="Select book..."
                      />
                      {errors.booksId && <TextHelper>{errors.booksId.message}</TextHelper>}
                    </div>
                  )}
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={handleIsAddBookActive}
                >
                  {isAddBookActive ? "Close Book" : "Add Book"}
                </Button>
              </Flex>
            </GridItem>
          </GridContainer>
          {isAddBookActive && (
            <>
              <Divider orientation="horizontal" />
              <TextCenter>ADD NEW BOOK</TextCenter>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <TextInput
                    {...registerBook("title")}
                    error={Boolean(errorsBook.title)}
                    helperText={errorsBook.title?.message}
                    label="Book's Title"
                    fullWidth
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextInput
                    {...registerBook("isbn")}
                    error={Boolean(errorsBook.isbn)}
                    helperText={errorsBook.isbn?.message}
                    label="Book's ISBN"
                    fullWidth
                    type="text"
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextInput
                    error={Boolean(errorsBook.cover)}
                    helperText={errorsBook.cover?.message}
                    onChange={handleBookCover}
                    fullWidth
                    type="file"
                    label="Book's Cover"
                    accept="image/png"
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextInput
                    {...registerBook("year", { valueAsNumber: true })}
                    error={Boolean(errorsBook.year)}
                    helperText={errorsBook.year?.message}
                    fullWidth
                    type="number"
                    label="Publication Year"
                  />
                </GridItem>
                <GridItem xs={12}>
                  <TextareaInput
                    {...registerBook("description")}
                    error={Boolean(errorsBook.description)}
                    helperText={errorsBook.description?.message}
                    label="Description"
                    cols={30}
                    rows={10}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Flex justifyContent="flex-end">
                    <Button
                      type="button"
                      variant="outlined"
                      color="primary"
                      onClick={handleSubmitBook(handleAddBookToCreate)}
                    >
                      Add
                    </Button>
                  </Flex>
                </GridItem>
              </GridContainer>
            </>
          )}
          <Divider orientation="horizontal" />
          <Flex justifyContent="flex-end" alignItems="center" gap={10}>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            {loading && !errorResponse ? (
              <Loader size={30} />
            ) : (
              <Button variant="contained" color="primary" disabled={isAddBookActive}>
                Create
              </Button>
            )}
          </Flex>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateAuthorPresenter;
