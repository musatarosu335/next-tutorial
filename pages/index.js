import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>Go to about page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
