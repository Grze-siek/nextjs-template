'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { Button } from '@mui/material';
import { brown } from '@mui/material/colors';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/imageBuilder';
import { getImageDimensions } from '@sanity/asset-utils';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import useMediaQuery from '../hooks/useMediaQuery';

const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlFor(value).url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

export default function ServicesTab({ data }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <>
      {isDesktop ? (
        <Tabs
          id="custom-animation"
          value={data[0].value.current}
          className="shadow-md"
        >
          <TabsHeader>
            {data.map(({ _id, title, value, image }) => (
              <Tab
                key={_id}
                value={value.current}
                className="w-full h-full py-4 flex justify-center bg-light-color rounded-t-md"
              >
                <div className="relative flex justify-center items-center mx-auto rounded-full w-36 h-36 object-cover mb-4 overflow-hidden">
                  <Image
                    src={urlFor(image).url()}
                    alt={title}
                    fill={true}
                    className="mx-auto"
                  />
                </div>
                <div className="text-md font-semibold uppercase text-center">
                  {title}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ _id, value, description, link }) => (
              <TabPanel key={_id} value={value.current} className="p-0">
                <div className="flex bg-no-repeat bg-center bg-cover  bg-white flex-col items-center p-10">
                  <PortableText value={description} components={components} />
                  <Link href={link} className="mt-4">
                    <Button
                      variant="outlined"
                      sx={{
                        color: brown[600],
                        borderColor: brown[600],
                        hoveredColor: brown[400],
                      }}
                      className="hover:border-yellow-900"
                    >
                      Zobacz naszą ofertę
                    </Button>
                  </Link>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      ) : (
        <>
          {data.map(({ _id, link, description, title, image }) => (
            <Accordion key={_id}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="p-0 bg-light-color"
              >
                <div className="w-full h-full flex flex-col items-center justify-center  rounded-t-md">
                  <div className="relative flex justify-center items-center mx-auto rounded-full w-36 h-36 object-cover mb-4 overflow-hidden">
                    <Image
                      src={urlFor(image).url()}
                      alt={title}
                      fill={true}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-md font-semibold uppercase text-center">
                    {title}
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex bg-no-repeat bg-center bg-cover  bg-white flex-col items-center px-8 py-4">
                  <PortableText value={description} components={components} />
                  <Link href={link} className="mt-4">
                    <Button
                      variant="outlined"
                      sx={{
                        color: brown[600],
                        borderColor: brown[600],
                        hoveredColor: brown[400],
                      }}
                      className="hover:border-yellow-900"
                    >
                      Zobacz naszą ofertę
                    </Button>
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </>
      )}
    </>
  );
}
