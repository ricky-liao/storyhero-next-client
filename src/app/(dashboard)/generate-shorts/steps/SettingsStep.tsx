'use client';

import {
  LayersIcon,
  PaletteIcon,
  SettingsIcon,
  SlidersHorizontal,
  Volume2Icon,
} from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { StepComponentProps } from './UploadStep';

export default function SettingsStep({
  setLoading,
  next,
  prev,
}: StepComponentProps) {
  const form = useFormContext();
  const formData = form.getValues();

  return (
    <div className="space-y-8">
      <div className="bg-storyhero-bg-elevated rounded-lg p-6">
        <h3 className="text-storyhero-text-primary mb-4 text-lg font-medium">
          Fine-tune your content
        </h3>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Visual settings section */}
          <div className="bg-storyhero-bg-higher rounded-lg p-5">
            <div className="mb-4 flex items-center gap-2">
              <PaletteIcon className="text-storyhero-accent-indigo h-5 w-5" />
              <h3 className="text-storyhero-text-primary text-base font-medium">
                Visual settings
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-storyhero-text-primary mb-2 block text-sm font-medium">
                  Zoom level
                </label>
                <select
                  className="bg-storyhero-bg-base text-storyhero-text-primary border-storyhero-bg-highest focus:ring-storyhero-accent-indigo h-10 w-full rounded-md border px-3 py-2 focus:ring-1 focus:outline-none"
                  value={form.watch('zoomLevel') || 'noZoom'}
                  onChange={(e) => form.setValue('zoomLevel', e.target.value)}
                >
                  <option value="noZoom">No Zoom</option>
                  <option value="25">25% Zoom</option>
                  <option value="50">50% Zoom</option>
                  <option value="75">75% Zoom</option>
                  <option value="100">100% Zoom</option>
                </select>
                <p className="text-storyhero-text-secondary mt-1 text-xs">
                  Choose how much to zoom in on your video
                </p>
              </div>
            </div>
          </div>

          {/* Audio settings section */}
          {/* <div className="bg-storyhero-bg-higher rounded-lg p-5">
            <div className="mb-4 flex items-center gap-2">
              <Volume2Icon className="text-storyhero-accent-indigo h-5 w-5" />
              <h3 className="text-storyhero-text-primary text-base font-medium">
                Audio settings
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-storyhero-text-primary mb-2 block text-sm font-medium">
                  Background music
                </label>
                <select
                  className="bg-storyhero-bg-base text-storyhero-text-primary border-storyhero-bg-highest focus:ring-storyhero-accent-indigo h-10 w-full rounded-md border px-3 py-2 focus:ring-1 focus:outline-none"
                  value={form.watch('backgroundMusic') || 'none'}
                  onChange={(e) =>
                    form.setValue('backgroundMusic', e.target.value)
                  }
                >
                  <option value="none">None</option>
                  <option value="upbeat">Upbeat</option>
                  <option value="calm">Calm</option>
                  <option value="dramatic">Dramatic</option>
                </select>
                <p className="text-storyhero-text-secondary mt-1 text-xs">
                  Optional background music for your video
                </p>
              </div>

              <div>
                <label className="text-storyhero-text-primary mb-2 block text-sm font-medium">
                  Audio volume
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    className="bg-storyhero-bg-highest h-2 w-full cursor-pointer appearance-none rounded-lg"
                    value={form.watch('audioVolume') || '100'}
                    onChange={(e) =>
                      form.setValue('audioVolume', e.target.value)
                    }
                  />
                  <span className="text-storyhero-text-secondary w-8 text-sm">
                    {form.watch('audioVolume') || 100}%
                  </span>
                </div>
                <p className="text-storyhero-text-secondary mt-1 text-xs">
                  Adjust the original audio volume
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Additional options section */}
        <div className="bg-storyhero-bg-higher rounded-lg p-5">
          <div className="mb-4 flex items-center gap-2">
            <SlidersHorizontal className="text-storyhero-accent-indigo h-5 w-5" />
            <h3 className="text-storyhero-text-primary text-base font-medium">
              Advanced options
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            {/* Intentionally left empty as all options were removed */}
            <p className="text-storyhero-text-secondary text-sm">
              No additional options available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
