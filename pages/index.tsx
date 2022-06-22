import { IconButton } from "@material-tailwind/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="canonical" href="https://www.material-tailwind.com" />
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-grey-700 text-lg">Start a new document</h2>
            <IconButton color="grey" className="">
              <i className="fas fa-ellipsis-v" />
            </IconButton>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image
                src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                layout="fill"
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-grey-700">
              Blank
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-grey-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow ">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <IconButton color="grey" className="">
              <i className="fas fa-folder" />
            </IconButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
