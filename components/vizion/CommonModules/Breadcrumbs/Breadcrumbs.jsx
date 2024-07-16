import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import { MAP_QUERY_KEY_NAME, MAP_ROUTER_NAME } from '@/constants/router';
import { blogListMock } from '@/mock/blog';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

export default function Breadcrumbs() {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const splitPaths = router.asPath.split('/'); // "/bai-viet/digital-marketing/3"
    const splitRoutes = router.route.split('/'); // "/bai-viet/[categoryId]/[blogId]"

    const cumbLinks = splitPaths.reduce((links, cur, curIndex) => {
      const last = curIndex > 1 ? links[curIndex - 1] : '';
      const newPath = last + '/' + cur;
      links.push(newPath);
      return links;
    }, []);

    const cumbLabels = splitRoutes.reduce((labels, cur) => {
      if (MAP_ROUTER_NAME[cur]) {
        labels.push(MAP_ROUTER_NAME[cur]);
      } else if (MAP_QUERY_KEY_NAME[cur]) {
        const slugKey = MAP_QUERY_KEY_NAME[cur].slugKey;
        const dataKey = MAP_QUERY_KEY_NAME[cur].dataKey;
        const labelKey = MAP_QUERY_KEY_NAME[cur].labelKey;

        const blogData = blogListMock.find(blog => String(blog[dataKey]) === router.query[slugKey]);
        const label = blogData?.[labelKey];

        if (label) labels.push(label);
      }

      return labels;
    }, []);

    return cumbLinks.map((curLink, index) => {
      return {
        link: curLink,
        label: cumbLabels[index],
      };
    });
  }, [router.asPath, router.route, router.query]);

  return (
    <div className="breadcrumbs-container">
      {breadcrumbs.map((cumb, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <ChevronRightIcon className="icon" />}
          <Link className="link-item" href={cumb.link} title={cumb.label}>
            {cumb.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
