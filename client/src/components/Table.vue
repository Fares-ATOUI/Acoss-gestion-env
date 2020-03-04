<template>
  <CDataTable
    :items="items"
    :fields="fields"
    column-filter
    table-filter
    items-per-page-select
    hover
    sorter
    pagination
  >
    <template #status="{item}">
      <td>
        <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
      </td>
    </template>
    <template #show_details="{item, index}">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(index)"
        >{{details.includes(index) ? 'Masquer' : 'Afficher'}}</CButton>
      </td>
    </template>
    <template #details="{item, index}">
      <CCollapse :show="details.includes(index)">
        <CCardBody>
          <CMedia :aside-image-props="{ height: 102 }">
            <h4>{{item.code_projet}}</h4>
            <p class="text-muted">Date MEP: {{item.date_mep}}</p>
            <CButton size="sm" color="info" class>User Settings</CButton>
            <CButton size="sm" color="danger" class="ml-1">Supprimer</CButton>
          </CMedia>
        </CCardBody>
      </CCollapse>
    </template>
  </CDataTable>
</template>

<script>
const fields = [
  { key: "code_projet", _style: "width:40%" },
  { key: "libelle", _style: "width:40%;" },
  { key: "id_projet_lot", _style: "width:20%;" },
  {
    key: "show_details",
    label: "",
    _style: "width:1%",
    sorter: false,
    filter: false
  }
];

export default {
  props: ["items"],
  

  computed: {
    getItems() {
      return this.items;
    }
  },
  name: "tables",
  data() {
    return {
      fields,
      details: []
    };
  },

  /*
  mounted: function() {
    fetch("http://localhost:3000/projet_mm_date_mep")
      .then(rep => {
        return rep.json();
      })
      .then(e => {
        this.items = e;
      });
  },
*/

  methods: {
    getBadge(status) {
      return status === "Active"
        ? "success"
        : status === "Inactive"
        ? "secondary"
        : status === "Pending"
        ? "warning"
        : status === "Banned"
        ? "danger"
        : "primary";
    },
    toggleDetails(index) {
      const position = this.details.indexOf(index);
      position !== -1
        ? this.details.splice(position, 1)
        : this.details.push(index);
    }
  }
};
</script>