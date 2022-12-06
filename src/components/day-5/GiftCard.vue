<script setup lang="ts">
type Props = {
  toName: string;
  fromName: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div>
    <div class="w-full rounded-xl bg-emerald-500 p-8">
      <div class="flex flex-col items-center">
        <img
          src="/assets/santa.svg"
          alt="サンタクロースがソリに乗っているイラスト"
          class="w-40"
        />
        <div class="w-full">
          <h1
            class="mt-4 text-center text-3xl font-bold tracking-wider text-white"
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
