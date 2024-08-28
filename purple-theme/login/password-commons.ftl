<#macro logoutOtherSessions>
    <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
        <div class="${properties.kcFormOptionsWrapperClass!}">
            <div class="pf-v5-c-check">
             <label class="pf-v5-c-check__label reset-password-label" for="logout-sessions" style="padding: 0px" >
                <div class="switch">
                    <input class="pf-v5-c-check__input" type="checkbox" id="logout-sessions" name="logout-sessions" value="on" checked>
                       <span class="slider round"></span>
                </div>
                   <span> ${msg("logoutOtherSessions")}</span>
                </label>
            </div>
        </div>
    </div>
</#macro>
