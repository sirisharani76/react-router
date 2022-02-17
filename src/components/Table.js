import React from 'react';

function Table() {
return ( <div class="container">
<div class="row">
    <div class="col-9">
        <p class="text-white  mt-5 rounded shadow">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
        </p>
    </div>

    <div class="col-3">
        <p class="bg-secondary text-white p-4 mt-5 rounded shadow">
            the quick brow fox jumps over the lazy dog the quick brow fox jumps over the lazy dog
            the quick brow fox jumps over the lazy dog the quick brow fox jumps over the lazy dog
            the quick brow fox jumps over the lazy dog the quick brow fox jumps the quick brow fox 
            jumps over the lazy dog the quick brow fox jumps 
        </p>
    </div>
</div>
</div>

                                    
                  );
}

export default Table;