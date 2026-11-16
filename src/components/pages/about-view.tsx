"use client";

import {
  ArrowRight,
  Award,
  Globe,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

const TEAM_MEMBERS = [
  {
    name: "Flavia Villacorta",
    location: "Trujillo, La Libertad, Perú",
  },
  {
    name: "Yesica Castillo Olivares",
    location: "Trujillo, La Libertad, Perú",
  },
  {
    name: "Julio Castillo",
    location: "Trujillo, La Libertad, Perú",
  },
] as const;

export function AboutView() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const pillars = [
    {
      icon: HeartHandshake,
      title: isEs
        ? "El agricultor tiene la última palabra"
        : "The farmer always decides",
      desc: isEs
        ? "ChacraSat no reemplaza la sabiduría de campo ni a las agencias agrarias: entrega datos satelitales traducidos a lenguaje claro para apoyar la decisión."
        : "ChacraSat never replaces field experience or local agronomists: it translates satellite observations into plain language to support farm decisions.",
    },
    {
      icon: ShieldCheck,
      title: isEs
        ? "Privacidad total en el navegador"
        : "100% in-browser privacy",
      desc: isEs
        ? "Los datos de tu parcela se procesan localmente en tu dispositivo, sin cuentas obligatorias ni servidores intermediarios que almacenen tu información."
        : "Your farm profile runs locally on your device, with no mandatory accounts or intermediary servers storing your land information.",
    },
    {
      icon: Globe,
      title: isEs
        ? "Ciencia abierta para la costa norte"
        : "Open science for Peru's northern coast",
      desc: isEs
        ? "Enfocado en los valles de Moche, Virú, Chao, Chicama y Jequetepeque, donde la aridez extrema, la salinización y El Niño costero exigen planificar cada gota de agua."
        : "Focused on the Moche, Virú, Chao, Chicama and Jequetepeque valleys, where extreme aridity, salinization and coastal El Niño require planning every drop of water.",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[1260px] flex-col gap-7 px-4 py-7 sm:gap-8 sm:px-6 sm:py-11">
      {/* Hero Card */}
      <div className="rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy p-5 text-white shadow-sm sm:p-9">
        <Badge
          variant="outline"
          className="mb-3 h-auto rounded-full border-[#6fd39a]/40 bg-[#2f9e5b]/20 px-3 py-1 text-left text-xs leading-tight font-bold tracking-wider whitespace-normal text-[#6fd39a] uppercase"
        >
          <Award className="mr-1.5 size-3.5 shrink-0" />
          <span>{t("hKicker")}</span>
        </Badge>

        <h1 className="font-heading text-2xl font-bold sm:text-4xl">
          {isEs
            ? "De la órbita a la chacra: el propósito de ChacraSat"
            : "From orbit to the chacra: the mission behind ChacraSat"}
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#c9d8ef] sm:text-base">
          {isEs
            ? "Desarrollado en Trujillo, Perú, para el desafío global NASA Space Apps Challenge 2026 (“Field Shift: Adapting Farms with NASA Data”). Nuestro objetivo es acercar los registros climáticos satelitales de la NASA a los agricultores, técnicos y juntas de usuarios de La Libertad."
            : "Built in Trujillo, Peru, for the 2026 NASA Space Apps Challenge (“Field Shift: Adapting Farms with NASA Data”). Our goal is to put NASA satellite climate records directly into the hands of farmers, agronomists, and irrigation boards in La Libertad."}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/planner"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-auto min-h-11 w-full justify-center gap-2 rounded-xl border-0 bg-leaf px-5 py-3 text-center text-sm font-bold whitespace-normal text-white shadow-md hover:bg-[#278a4f] sm:w-auto"
            )}
          >
            <Sprout className="size-4 shrink-0" />
            <span>{t("hCta")}</span>
            <ArrowRight className="size-4 shrink-0" />
          </Link>

          <Link
            href="/metodologia"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-auto min-h-11 w-full justify-center rounded-xl border-white/35 bg-transparent px-5 py-3 text-center text-sm font-semibold whitespace-normal text-white hover:bg-white/12 hover:text-white sm:w-auto"
            )}
          >
            {isEs ? "Ver metodología científica" : "View scientific methodology"}
          </Link>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <Card
              key={p.title}
              className="rounded-[14px] border-line bg-surface p-5 shadow-xs"
            >
              <CardHeader className="p-0">
                <div className="mb-2 grid size-10 place-items-center rounded-xl bg-leaf-light text-leaf">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="font-heading text-lg font-bold text-ink">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Team Trujillo Orbital */}
      <Card className="rounded-[14px] border-line bg-surface p-5 shadow-xs sm:p-6">
        <CardHeader className="p-0">
          <CardTitle className="flex items-center gap-2 font-heading text-xl font-bold text-ink">
            <Users className="size-5 shrink-0 text-navy" />
            <span>
              {isEs ? "Equipo Trujillo Orbital" : "Team Trujillo Orbital"}
            </span>
          </CardTitle>
          <CardDescription className="text-[14px]">
            {isEs
              ? "Representando a Trujillo, La Libertad, Perú en el NASA Space Apps Challenge 2026."
              : "Representing Trujillo, La Libertad, Peru in the 2026 NASA Space Apps Challenge."}
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="flex flex-col justify-between rounded-xl border border-line bg-[#f8fafc] p-4"
            >
              <div>
                <div className="mb-2.5 inline-grid size-10 place-items-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                  {m.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-heading text-base font-bold text-ink">
                  {m.name}
                </h3>
              </div>
              <span className="mt-3 block text-xs font-medium text-leaf">
                {m.location}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
