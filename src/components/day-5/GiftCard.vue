<script setup lang="ts">
type Props = {
  toName: string;
  fromName: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div
      class="relative w-full rounded-xl bg-emerald-500 p-10 before:absolute before:left-4 before:top-4 before:h-6 before:w-6 before:rounded-full before:bg-white"
    >
      <div class="flex flex-col items-center">
        <img
          src="/assets/santa.svg"
          alt="サンタクロースがソリに乗っているイラスト"
          class="w-40"
        />
        <div class="w-full">
          <h1
            class="mt-3 text-center text-3xl font-bold tracking-wide text-white"
          >
            Happy Holidays!
          </h1>

          <div class="mt-10 flex flex-col gap-2">
            <div class="rounded bg-emerald-100 px-4 py-2 text-stone-800">
              TO : {{ toName }}
            </div>
            <div class="rounded bg-emerald-100 px-4 py-2 text-stone-800">
              FROM : {{ fromName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
