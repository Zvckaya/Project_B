import styled from "styled-components";

const Form = styled.form``;

const TextArea = styled.textarea``;

const AttachFileButton = styled.button``;

const AttachFileInput = styled.input``;

const SubmitBtn = styled.button``;

export default function PostTweetForm() {
  return (
    <Form>
      <TextArea />
      <AttachFileButton>Add photo</AttachFileButton>
      <AttachFileInput />
      <SubmitBtn />
    </Form>
  );
}
