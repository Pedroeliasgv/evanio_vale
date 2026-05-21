import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Play,
  Pause,
  Sparkles,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { Section, SectionHeader, BlueText } from "./Section";

import aMesaVideo from "@/assets/a-mesa-video.mp4";
import aMesaLogo from "@/assets/a-mesa-logo.png";

const eventLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSexnQFWhcfZPoqzRonaW-FqD-QI6O64k1x2lOcne9NatwVvCw/viewform?usp=publish-editor";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

export function Events() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const hideControlsTimeout = useRef<number | null>(null);

  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.65);
  const [showVolume, setShowVolume] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const controlsShouldShow = controlsVisible || !playing || showVolume;

  const clearHideTimer = () => {
    if (hideControlsTimeout.current) {
      window.clearTimeout(hideControlsTimeout.current);
      hideControlsTimeout.current = null;
    }
  };

  const showControlsTemporarily = () => {
    setControlsVisible(true);
    clearHideTimer();

    hideControlsTimeout.current = window.setTimeout(() => {
      if (playing && !showVolume) {
        setControlsVisible(false);
      }
    }, 1800);
  };

  const hideControlsImmediately = () => {
    clearHideTimer();
    setShowVolume(false);

    if (playing) {
      setControlsVisible(false);
    }
  };

  useEffect(() => {
    showControlsTemporarily();

    return () => {
      clearHideTimer();
    };
  }, []);

  useEffect(() => {
    if (!playing || showVolume) {
      setControlsVisible(true);
    }
  }, [playing, showVolume]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    showControlsTemporarily();

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !muted;

    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      const safeVolume = volume === 0 ? 0.65 : volume;

      video.volume = safeVolume;
      setVolume(safeVolume);

      await video.play();
      setPlaying(true);
    }
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value);
    const video = videoRef.current;

    setVolume(nextVolume);

    if (!video) return;

    video.volume = nextVolume;

    if (nextVolume === 0) {
      video.muted = true;
      setMuted(true);
    } else {
      video.muted = false;
      setMuted(false);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const nextTime = Number(event.target.value);
    const video = videoRef.current;

    setCurrentTime(nextTime);

    if (!video) return;

    video.currentTime = nextTime;
  };

  const handleFullscreen = async () => {
    const player = playerRef.current;

    if (!player) return;

    if (!document.fullscreenElement) {
      await player.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <Section id="eventos">
      <SectionHeader
        eyebrow="Agenda"
        title={
          <>
            Eventos e <BlueText>Inscrições</BlueText>
          </>
        }
        subtitle="Participe de encontros especiais de fé, palavra, comunhão e direção espiritual."
      />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] border border-sky-400/25 bg-gradient-to-br from-background via-card/70 to-background p-4 shadow-[0_30px_120px_rgba(59,130,246,0.12)] sm:rounded-[2.5rem] sm:p-5 md:p-8 lg:p-10"
      >
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[2.2rem] bg-blue-500/20 blur-3xl transition-all duration-500 group-hover:bg-sky-400/20" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-sky-400/25 bg-background/70 p-2 backdrop-blur sm:rounded-[2rem] sm:p-3">
              <div className="mb-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-sky-300 sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
                  Vídeo do evento
                </div>
              </div>

              <div
                ref={playerRef}
                className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded-[1.25rem] bg-black sm:aspect-video sm:rounded-[1.5rem] lg:aspect-[4/5]"
                onMouseEnter={showControlsTemporarily}
                onMouseMove={showControlsTemporarily}
                onMouseLeave={hideControlsImmediately}
                onTouchStart={showControlsTemporarily}
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  src={aMesaVideo}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onTimeUpdate={(event) =>
                    setCurrentTime(event.currentTarget.currentTime)
                  }
                  onLoadedMetadata={(event) =>
                    setDuration(event.currentTarget.duration)
                  }
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

                {!playing && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      togglePlay();
                    }}
                    className="absolute left-1/2 top-1/2 z-30 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all hover:scale-105 sm:h-16 sm:w-16 md:h-20 md:w-20"
                    aria-label="Reproduzir vídeo"
                  >
                    <Play size={30} className="ml-1 text-white md:size-[34px]" />
                  </button>
                )}

                <div
                  className={`absolute left-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md transition-all duration-300 sm:left-4 sm:top-4 md:left-5 md:top-5 md:px-4 md:py-2 ${
                    controlsShouldShow
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-3 opacity-0"
                  }`}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
                  A Mesa
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-3 pt-14 transition-all duration-300 md:px-4 md:pb-4 md:pt-20 ${
                    controlsShouldShow
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-6 opacity-0"
                  }`}
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={(event) => event.stopPropagation()}
                >
                  <div className="relative mb-2 sm:mb-3">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-sky-400"
                      style={{
                        background: `linear-gradient(to right, #38bdf8 ${progress}%, rgba(255,255,255,0.25) ${progress}%)`,
                      }}
                      aria-label="Controlar progresso do vídeo"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-1.5 sm:gap-2 md:gap-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-all hover:bg-white/15 sm:h-9 sm:w-9 md:h-10 md:w-10"
                        aria-label={
                          playing ? "Pausar vídeo" : "Reproduzir vídeo"
                        }
                      >
                        {playing ? (
                          <Pause size={18} />
                        ) : (
                          <Play size={18} />
                        )}
                      </button>

                      <div
                        className="group/volume relative flex items-center gap-2"
                        onMouseEnter={() => {
                          setShowVolume(true);
                          setControlsVisible(true);
                        }}
                        onMouseLeave={() => setShowVolume(false)}
                      >
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleSound();
                            setShowVolume(true);
                            setControlsVisible(true);
                          }}
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-all hover:bg-white/15 sm:h-9 sm:w-9 md:h-10 md:w-10"
                          aria-label={muted ? "Ativar som" : "Desativar som"}
                        >
                          {muted ? (
                            <VolumeX size={18} />
                          ) : (
                            <Volume2 size={18} />
                          )}
                        </button>

                        <div
                          className={`hidden items-center overflow-hidden transition-all duration-300 sm:flex ${
                            showVolume
                              ? "w-20 opacity-100 md:w-28"
                              : "w-0 opacity-0"
                          }`}
                        >
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={muted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-sky-400"
                            aria-label="Controlar volume do vídeo"
                          />
                        </div>
                      </div>

                      <span className="hidden text-[11px] font-medium text-white/85 min-[420px]:inline sm:text-xs">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                      <span className="hidden rounded px-1.5 py-0.5 text-[10px] font-semibold text-white/80 sm:inline">
                        HD
                      </span>

                      <button
                        type="button"
                        onClick={handleFullscreen}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition-all hover:bg-white/15 sm:h-9 sm:w-9 md:h-10 md:w-10"
                        aria-label="Tela cheia"
                      >
                        <Maximize size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              <Calendar size={14} />
              Evento Especial
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
                  Evento
                </p>

                <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
                  <div className="absolute -inset-6 rounded-full bg-sky-400/20 blur-3xl" />

                  <div className="relative rounded-[1.5rem] border border-sky-400/25 bg-gradient-to-br from-sky-400/10 via-blue-500/5 to-cyan-400/10 p-4 shadow-[0_0_55px_rgba(56,189,248,0.18)] backdrop-blur-sm sm:p-5 md:rounded-[1.8rem] md:p-7">
                    <img
                      src={aMesaLogo}
                      alt="A Mesa"
                      className="mx-auto h-auto w-full max-w-[480px] object-contain drop-shadow-[0_0_28px_rgba(255,255,255,0.22)]"
                    />
                  </div>
                </div>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Um encontro preparado para quem deseja viver um tempo de fé,
                palavra, comunhão e direção espiritual.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sky-300">
                  <Sparkles size={16} />
                  <span className="text-xs font-medium uppercase tracking-[0.18em]">
                    Palavra
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Um ambiente de ensino, ministração e fortalecimento
                  espiritual.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-sky-300">
                  <Calendar size={16} />
                  <span className="text-xs font-medium uppercase tracking-[0.18em]">
                    Inscrição
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Garanta sua participação preenchendo o formulário oficial.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400"
              >
                Inscrever-se no Evento
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/25 bg-background/40 px-7 py-4 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-sky-300/60"
              >
                Tirar dúvidas
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default Events;