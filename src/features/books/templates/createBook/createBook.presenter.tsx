import { TextInput, TextareaInput } from "@/components/molecules";
import {
  Box,
  Button,
  Divider,
  Flex,
  GridContainer,
  GridItem,
  Paper,
  TextCenter,
} from "@/components/ui/atoms";
import Link from "next/link";
import { FC } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useCreateBook } from "../../services";

type CreateBookPresenterProps = {
  model: ReturnType<typeof useCreateBook>;
};

const animatedComponents = makeAnimated();

const CreateBookPresenter: FC<CreateBookPresenterProps> = ({ model: { values, actions } }) => {
  const { isAddAuthorActive, authorsOptions, errors, errorsAuthor, control } = values;
  const {
    handleIsAddAuthorActive,
    register,
    handleSubmit,
    handleCreateBook,
    handleFile,
    registerAuthor,
    handleAddAuthorToCreate,
    handleSubmitAuthor,
  } = actions;

  console.log({ errorsAuthor });

  return (
    <Paper maxWidth={600}>
      <Box st={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmit(handleCreateBook)}>
          <GridContainer>
            <GridItem xs={12} sm={6} spacing={2}>
              <TextInput
                {...register("title")}
                fullWidth
                label="Title"
                type="text"
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextInput
                {...register("isbn")}
                fullWidth
                label="ISBN"
                type="text"
                error={Boolean(errors.isbn)}
                helperText={errors.isbn?.message}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextInput
                onChange={handleFile}
                fullWidth
                type="file"
                label="Cover"
                error={Boolean(errors.cover)}
                helperText={errors.cover?.message}
              />
            </GridItem>
            <GridItem xs={12} sm={6}>
              <TextInput
                {...register("year", { valueAsNumber: true })}
                fullWidth
                type="number"
                label="Publication Year"
                error={Boolean(errors.year)}
                helperText={errors.year?.message}
              />
            </GridItem>
            <GridItem xs={12}>
              <TextareaInput
                {...register("description")}
                label="Description"
                cols={30}
                rows={10}
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />
            </GridItem>
            <GridItem xs={12}>
              <Flex gap={8} alignItems="center">
                <Controller
                  control={control}
                  name="authorsId"
                  render={({ field: { name, onBlur, onChange, ref, value } }) => (
                    <Select
                      styles={{
                        container: (baseStyles) => ({
                          ...baseStyles,
                          width: "400px",
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
                      options={authorsOptions}
                      placeholder="Select authors..."
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={handleIsAddAuthorActive}
                >
                  {isAddAuthorActive ? "Close Author" : "Add Author"}
                </Button>
              </Flex>
            </GridItem>
          </GridContainer>
          {isAddAuthorActive && (
            <>
              <Divider orientation="horizontal" />
              <TextCenter>ADD NEW AUTHORS</TextCenter>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <TextInput {...registerAuthor("authorName")} label="Author's Name" fullWidth />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextInput
                    {...registerAuthor("authorBirthday", { valueAsDate: true })}
                    label="Author's Birthday"
                    fullWidth
                    type="date"
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextInput fullWidth type="file" label="Avatar" />
                </GridItem>
                <GridItem xs={12}>
                  <TextareaInput
                    {...registerAuthor("authorReview")}
                    label="Review"
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
                      onClick={handleSubmitAuthor(handleAddAuthorToCreate)}
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
            <Link href="/books">
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Link>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Flex>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateBookPresenter;
