import DefaultLayout from "@/presentation/components/layout/DefaultLayout";
import GlassCard from "@/presentation/components/common/GlassCard";

export default function Home() {
  return (
    <DefaultLayout backgroundType="universe">
      <GlassCard title="Lorem" titleLevel="h1">
        <p className="h-full base-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          corporis excepturi, non hic eveniet adipisci nihil sint? Aspernatur,
          vel adipisci, sapiente debitis accusantium maxime labore cumque
          repudiandae reprehenderit quia sed?
        </p>
      </GlassCard>
    </DefaultLayout>
  );
}
