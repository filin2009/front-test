<div>
    <div class="b-container">
        Sample Text
        <a href="javascript:TestDrawer.PopUpShow()">Show popup</a>
    </div>

    <div class="b-popup" id="popup1">
        <div class="b-popup-content">
            Text in Popup
            <a href="javascript:TestDrawer.PopUpHide()">Hide popup</a>
        </div>
    </div>

        <div class="flex-container">
            {{#SMSData}}
            <div>
                <table>
                    <tr>
                        <td>
                            {{Name}}<br>
                            <img src="https://ilogik.planfix.ru/{{Ico}}" alt="sms-provider"><br>
                        </td>
                    </tr>
                    <tr>
                        <td>
                <!-- Rounded switch -->
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                        </td>
                    </tr>
                </table>
            </div>
            {{/SMSData}}
        </div>

</div>
