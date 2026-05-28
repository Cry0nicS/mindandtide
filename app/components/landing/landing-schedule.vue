<script setup lang="ts">
type ScheduleRow = {
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
};

const {locale, t} = useI18n();

const columns = computed(() => {
    void locale.value;

    return [
        {
            accessorKey: "time",
            header: t("pages.homePage.schedule.columns.time")
        },
        {
            accessorKey: "monday",
            header: t("pages.homePage.schedule.columns.monday")
        },
        {
            accessorKey: "tuesday",
            header: t("pages.homePage.schedule.columns.tuesday")
        },
        {
            accessorKey: "wednesday",
            header: t("pages.homePage.schedule.columns.wednesday")
        },
        {
            accessorKey: "thursday",
            header: t("pages.homePage.schedule.columns.thursday")
        },
        {
            accessorKey: "friday",
            header: t("pages.homePage.schedule.columns.friday")
        }
    ];
});

const data = computed<ScheduleRow[]>(() => {
    void locale.value;

    return [
        {
            time: t("pages.homePage.schedule.rows.row1.time"),
            monday: t("pages.homePage.schedule.rows.row1.monday"),
            tuesday: t("pages.homePage.schedule.rows.row1.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row1.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row1.thursday"),
            friday: t("pages.homePage.schedule.rows.row1.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.row2.time"),
            monday: t("pages.homePage.schedule.rows.row2.monday"),
            tuesday: t("pages.homePage.schedule.rows.row2.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row2.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row2.thursday"),
            friday: t("pages.homePage.schedule.rows.row2.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.row3.time"),
            monday: t("pages.homePage.schedule.rows.row3.monday"),
            tuesday: t("pages.homePage.schedule.rows.row3.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row3.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row3.thursday"),
            friday: t("pages.homePage.schedule.rows.row3.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.break1.time"),
            monday: t("pages.homePage.schedule.rows.break1.monday"),
            tuesday: t("pages.homePage.schedule.rows.break1.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.break1.wednesday"),
            thursday: t("pages.homePage.schedule.rows.break1.thursday"),
            friday: t("pages.homePage.schedule.rows.break1.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.row4.time"),
            monday: t("pages.homePage.schedule.rows.row4.monday"),
            tuesday: t("pages.homePage.schedule.rows.row4.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row4.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row4.thursday"),
            friday: t("pages.homePage.schedule.rows.row4.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.row5.time"),
            monday: t("pages.homePage.schedule.rows.row5.monday"),
            tuesday: t("pages.homePage.schedule.rows.row5.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row5.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row5.thursday"),
            friday: t("pages.homePage.schedule.rows.row5.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.break2.time"),
            monday: t("pages.homePage.schedule.rows.break2.monday"),
            tuesday: t("pages.homePage.schedule.rows.break2.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.break2.wednesday"),
            thursday: t("pages.homePage.schedule.rows.break2.thursday"),
            friday: t("pages.homePage.schedule.rows.break2.friday")
        },
        {
            time: t("pages.homePage.schedule.rows.row6.time"),
            monday: t("pages.homePage.schedule.rows.row6.monday"),
            tuesday: t("pages.homePage.schedule.rows.row6.tuesday"),
            wednesday: t("pages.homePage.schedule.rows.row6.wednesday"),
            thursday: t("pages.homePage.schedule.rows.row6.thursday"),
            friday: t("pages.homePage.schedule.rows.row6.friday")
        }
    ];
});
</script>

<template>
    <UTable
        :columns="columns"
        :data="data"
        :ui="{base: 'bg-muted/50', td: 'max-w-[300px] whitespace-normal'}"
        class="flex-1" />
</template>
