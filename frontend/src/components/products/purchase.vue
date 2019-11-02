<template>
  <div class="purchase">
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="column">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div class="ui vertical divider">
        and
      </div>
    </div>
    <div class="ui calendar" id="example5">
      <div class="ui input left icon">
        <i class="calendar icon"></i>
        <input type="date" placeholder="Date" value="5/30/2015 3pm" />
      </div>
    </div>
    <br />
    <div class="ui labeled input">
      <div class="ui label">Date</div>
      <input type="text" placeholder="TO-DA-YYYY" />
    </div>

    <br />
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">James</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Engineer</td>
        </tr>
        <tr>
          <td data-label="Name">Jill</td>
          <td data-label="Age">26</td>
          <td data-label="Job">Engineer</td>
        </tr>
        <tr>
          <td data-label="Name">Elyse</td>
          <td data-label="Age">24</td>
          <td data-label="Job">Designer</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Purchase"
};
</script>
