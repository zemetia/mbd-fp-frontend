import MobilOrderHistoryCard from '@/components/MobilOrderHistoryCard';
import Layout from '@/layouts/Layout';

export default function OrderHistoryPage() {
  return (
    <Layout>
      <section className='flex flex-row h-screen'>
        <div className='h-full w-[25rem] bg-white flex flex-col'>
          <div></div>
          <ul>
            <li>test</li>
          </ul>
        </div>
        <div className='h-full w-full overflow-x-auto p-5'>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
            <MobilOrderHistoryCard />
          </div>
        </div>
      </section>
    </Layout>
  );
}
