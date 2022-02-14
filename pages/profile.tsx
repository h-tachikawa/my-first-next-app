import useSWR from "swr";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

function Feature({ title, desc, ...rest }: { title: string; desc: string }) {
  return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
  );
}

function StackEx() {
  return (
      <Stack spacing={8}>
        <Feature
            title="Plan Money"
            desc="The future can be even brighter but a goal without a plan is just a wish"
        />
        <Feature
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
        />
      </Stack>
  );
}


// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

function Profile() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/users/1`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
      <StackEx />
  );
}

export default Profile;
