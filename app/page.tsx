import Avatar from "@/components/Avatar";
import ProjectItem from "@/components/ProjectItem";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <main className="mx-auto w-full max-w-2xl space-y-8 pt-10">
        <section className="space-y-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center space-x-3">
              <div className="relative h-12 w-12">
                <Suspense fallback={<Avatar.Skeleton />}>
                  <Avatar />
                </Suspense>
              </div>

              <div className="flex flex-col">
                <span className="font-medium">Farid Ardiansyah</span>
                <span className="text-sm text-muted-foreground">
                  Hobi Teknologi dan selalu belajar
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                target="_blank"
                href=""
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>

              <Link
                target="_blank"
                href=""
                className={buttonVariants({ variant: "outline", size: "icon" })}
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>

              <ThemeToggle />
            </div>
          </div>

          <p>
            Saya bukan seorang ahli teknologi. Saya memandang teknologi dengan mata hobi saya, mata orang normal Saat ini saya sedang berusaha melatih keterampilan mandiri dan mempelajari hal-hal yang saya miliki perlu belajar, saya sangat termotivasi untuk terus maju, sejak itu tidak ada batasan dalam pemrograman,skill apapun.
          </p>
        </section>

        <section className="flex flex-col">
          <div className="mb-4 px-4 font-medium text-primary">Sertifikat</div>

          <Suspense fallback={<ProjectItem.Skeleton />}>
            <ProjectItem
              title="MiniComputer"
              description="31 August 2022."
			  description="-"
              link=""
              isArchived={false}
            />
            <ProjectItem
              title="MicroController"
              description="15 August 2022."
			  description="-"
              link=""
              isArchived={true}
            />
			 <ProjectItem
              title="DRONE"
              description="03 April 2023."
			  description="-"
              link=""
              isArchived={true}
            />
			 <ProjectItem
              title="JavaScript Programming Language Fundamental"
              description="18 June 2021"
			  description="-"
              link=""
              isArchived={true}
            />
			 <ProjectItem
              title="XML Programming Language"
              description="16 June 2021."
			  description="-"
              link=""
              isArchived={true}
            />
			 <ProjectItem
              title="C# Programming Language Fundamental"
              description="28 April 2021."
			  description="-"
              link=""
              isArchived={true}
            />
			 <ProjectItem
              title="Building Website using HTML 5"
              description="26 April 2021."
			  description="-"
              link=""
              isArchived={true}
             />
			<ProjectItem
              title="Belajar C++ Dasar"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar Docker untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar GIT untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar Go-Lang untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar JQuery Dasar "
              description="Januari 2024."
			  description="-
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar Java Dasar"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar JavaScript Async"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar Kubernetes untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Belajar MongoDB untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Cybersecurity Essentials LFC108"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="HTML and CSS Basics: Building the Foundation of Web Development"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Introduction to Data Analysis in Excel"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Network Architectures"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Network Fundamental"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Neural Network Fundamentals"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Optimizing Network Parameters"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Pemrograman Python untuk Pemula"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Product Strategy Fundamentals: From Idea to Market Success"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Proyek Sederhana Svelte - Todo App"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			<ProjectItem
              title="Python Fundamental"
              description="Januari 2024."
			  description="-"
              link=""
              isArchived={true}
            />
			
          </Suspense>
        </section>
      </main>
    </>
  );
}
