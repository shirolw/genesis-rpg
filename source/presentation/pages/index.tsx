import DefaultLayout from "@/presentation/components/layout/DefaultLayout";
import GlassCard from "@/presentation/components/common/GlassCard";

export default function Home() {
  return (
    <DefaultLayout backgroundType="universe">
      <main className=" w-full mx-auto my-10 px-6 lg:px-10">
        <GlassCard title="Lorem">
          <p className="h-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            corporis excepturi, non hic eveniet adipisci nihil sint? Aspernatur,
            vel adipisci, sapiente debitis accusantium maxime labore cumque
            repudiandae reprehenderit quia sed?
          </p>
        </GlassCard>
      </main>
    </DefaultLayout>
  );
}
